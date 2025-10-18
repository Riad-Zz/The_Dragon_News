import React from 'react';
// 1. Missing Imports: Need to import the icons used in the component
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from 'react-icons/fa';

// --- Helper Functions and Components (Needed for the main component to work) ---

// Helper function to format the date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    // Example output: 2025-04-22
    return date.toLocaleDateString('en-US', options).replace(/\//g, '-');
};

// Component for the Star Rating
const StarRating = ({ ratingNumber }) => {
    const maxStars = 5;
    const filledStars = Math.round(ratingNumber);
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
        stars.push(
            <FaStar
                key={i}
                // Tailwind classes: text-yellow-500 for filled, text-gray-300 for empty
                className={`text-base ${i < filledStars ? 'text-yellow-500' : 'text-gray-300'}`}
            />
        );
    }
    return <div className="flex space-x-0.5">{stars}</div>;
};

// --- Main NewsCard Component (Fixed) ---

// 2. Duplicate Declaration Fixed: Removed the inner redundant declaration
const NewsCard = ({ data }) => {
    const { title, author, thumbnail_url, details, rating, total_view } = data;

    // Format the date to match the "YYYY-MM-DD" style in the screenshot
    // 3. Dependency Fixed: This now relies on the formatDate helper function above
    const formattedDate = formatDate(author.published_date);

    // Truncate the details text for the preview
    const previewText = details.substring(0, 280) + '...';

    return (
        <div className="bg-white rounded-sm border border-[#E7E7E7] overflow-hidden">

            <div className="flex items-center justify-between  bg-[#F3F3F3] py-4 px-3 rounded-sm">
                <div className="flex items-center">
                    {/* Author Image */}
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div className="text-sm leading-tight">
                        {/* Author Name */}
                        <div className="font-semibold text-gray-800">{author.name}</div>
                        {/* Published Date */}
                        <div className="text-xs text-gray-500">{formattedDate}</div>
                    </div>
                </div>
                {/* Actions (Bookmark & Share) */}
                <div className="flex space-x-3 text-lg text-gray-500 cursor-pointer">
                    <FaRegBookmark className="hover:text-gray-700" />
                    <FaShareAlt className="hover:text-gray-700" />
                </div>
            </div>

            <div className="p-5">

                {/* === Header (Author, Date, Actions) === */}


                {/* === Body (Title, Image, Preview Text) === */}

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-extrabold mb-4 leading-snug text-gray-900">
                    {title}
                </h2>

                {/* Image */}
                <div className="mb-4 overflow-hidden rounded-md">
                    <img
                        src={thumbnail_url}
                        alt={title}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Details and Read More */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {previewText}
                    <a href="#" className="font-bold text-secondary ml-1">
                        Read More
                    </a>
                </p>

                {/* === Footer (Rating & Views) === */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* Rating */}
                    <div className="flex items-center">
                        {/* Dependency Fixed: This now relies on the StarRating component above */}
                        <StarRating ratingNumber={rating.number} />
                        <span className="ml-2 text-sm font-semibold text-gray-800">
                            {rating.number}.0
                        </span>
                    </div>

                    {/* View Count */}
                    <div className="flex items-center text-sm text-gray-500">
                        <FaEye className="mr-1 text-base" />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;