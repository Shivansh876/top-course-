import React, { useState } from 'react'
import Card from './Card'
// import { toast } from 'react-toastify';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);



    // returns you a list of all courses received from the api response 
    const getCourses = () => {
        if (category === "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            // toast.success(`${category}`+" Selected")
        }
        else {
            // specific category ka data pass krna hai 
            // toast.success(`${category}`+" Selected")

            return courses[category];
            
        }
        return allCourses;
    }


    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {
                !courses ? (
                    <div>
                        <p>No Data Found</p>
                    </div>
                ) :
                    (
                        // courses ke data ko map kr do or hr ek course k liye card bna do 
                        
                        getCourses().map((course) => {
                            return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                        })

                    )
            }

        </div>
    )
}

export default Cards