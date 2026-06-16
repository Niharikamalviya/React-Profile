import React from 'react'
import Card from "./Card";

const Cards = ({ courses }) => {


    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(course => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }

    return (
        <div>
            {
                getCourses().map((course) => {
                    return (
                        <Card key={course.id}
                            course={course} />
                    )

                })
            }
        </div>
    )
}

export default Cards



//  let allCourses = [];
//     const getCourses = () => {
//         Object.values(courses).forEach(courseCategory => {
//             courseCategory.forEach(course => {
//                 allCourses.push(course);
//             })
//         })

//         return allCourses;
//     }
