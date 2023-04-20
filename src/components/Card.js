import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses

    function clickHandler() {
        // check ki liked courses k andr current course ki id pdi hai ki nhi 
        if(likedCourses.includes(course.id)){
            // phle se liked hua pda hai 

            // iski help se hum jiski id match ho rhi hogi usko hum add nhi krenge baaki ko kr denge liked courses me 
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }
        else{
            // phle se like nhi hai 
            //  insert in liked courses 
            if(likedCourses.length ===0){
                setLikedCourses([course.id]);
            }
            else{
                // prev couorse ki state nikaal k new ko insert kr do
                setLikedCourses((prev)=> [...prev, course.id]);
            }
            toast.success("Liked Successfully")
        }
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt="" />   

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />):
                        (<FcLikePlaceholder fontSize="1.75rem" />) 
                    }
                </button>
            </div>

        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>
                {
                    course.description.length > 100 ? (course.description.substr(0,100)+"...") : (course.description+"...")
                }
            </p>
        </div>

    </div>
  )
}

export default Card