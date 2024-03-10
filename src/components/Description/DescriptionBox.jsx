import React, { useState, useEffect } from 'react';
import './Description.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DescriptionBox = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [isWritingReview, setIsWritingReview] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);


  const handleWriteReviewClick = () => {
    setIsWritingReview(true);
  };
  const handleCloseReviewClick = () => {
    setIsWritingReview(false);
  };
  const fetchReviews = async () => {
    try {
      const response = await fetch('https://backend3-9t1m.onrender.com/api/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        throw new Error('Failed to fetch reviews');
      }
    } catch (error) {
      console.error('Error fetching reviews', error);
    }
  };

  const handleReviewSubmit = async () => {
    // Check if any required fields are empty
    if (!name || !email || !newReview || rating === 0) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('https://backend3-9t1m.onrender.com/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, text: newReview, rating, date: Date.now() }),
      });
      if (response.ok) {
        const data = await response.json();
        setReviews([...reviews, data]);
        setNewReview('');
        setName('');
        setEmail('');
        setRating(0);
        toast.success('Review submitted successfully!');
      } else {
        throw new Error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review', error);
      toast.error('Failed to submit review. Please try again later.');
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  // Calculate average rating
  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRating / totalReviews;

  // Convert average rating to stars
  const averageStars = [];
  for (let i = 0; i < 5; i++) {
    averageStars.push(<span key={i} style={{ color: i < averageRating ? 'gold' : 'grey', fontSize: '30px' }}>&#9733;</span>);
  }

  return (
    <div className='DescriptionBox'>
      <div className="DescriptionBox-navigator">
        <div
          className={`DescriptionBox-nav-box ${showDescription ? 'active' : 'fade'}`}
          onClick={() => setShowDescription(true)}
        >
          Description
        </div>
        <div
          className={`DescriptionBox-nav-box ${!showDescription ? 'active' : 'fade'}`}
          onClick={() => setShowDescription(false)}
        >
          Reviews({totalReviews})
        </div>
      </div>
      <div className="DescriptionBox-content">
        {showDescription ? (
          <div className="DescriptionBox-description">
            <div className="DescriptionBox-description">
              <p>Introducing our TC Screen Guard, meticulously designed to safeguard your eyes from harmful blue light emitted by screens. Crafted with advanced technology, it reduces eye strain and promotes healthier screen time habits. Experience unparalleled clarity and comfort, ensuring your eyes stay protected with every glance.</p>
              <p>Elevate your eye safety with our TC Screen Guard, engineered to defend against the detrimental effects of prolonged screen exposure. With a specialized coating, it blocks harmful blue light, reducing the risk of eye fatigue, dryness, and potential long-term damage. Prioritize your eye health without compromising on screen time, thanks to our innovative solution that offers both protection and clarity.</p>
            </div>
          </div>
        ) : (
          <div className="DescriptionBox-reviews1">
            <div className='DescriptionBox'>
              {/* Display average rating */}
              <div className='hrs34'>
                <p >Average Rating: {averageStars}</p>
              </div>
              <div className="DescriptionBox-reviews">
                <div className='Harshalbh2'>
                  {/* Display existing reviews */}
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <p>Details:{review.text}</p>
                      <p>Rating:
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                      </p>
                      <p>Name: {review.name}</p>
                      <p>Email: {review.email}</p>
                      <p>Date: {new Date(review.date).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <hr />
                {/* Form to submit a new review */}
                <div className='review-form'>
                  {!isWritingReview && (
                    <button onClick={handleWriteReviewClick}>Write Review</button>
                  )}
                  {isWritingReview && (
                    <div className='review-inputs'>
                      <button onClick={handleCloseReviewClick}>Close Review</button>
                      <h1>Write a Review</h1>
                      <input type="text" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
                      <input type="email" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
                      <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} placeholder='Write a Review' required />
                      {/* Star ratings */}
                      <div className='harshking'>
                        Stars:
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'grey' }}
                            onClick={() => handleStarClick(star)}
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>
                      <button onClick={handleReviewSubmit}>Submit Review</button>
                      <ToastContainer/>
                    </div>
                  )}
                </div>


              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
