import React from 'react'
import FeaturesComponent from './FeaturesComponent'
import styles from './Features.module.css'



export default function Features() {
  return (
    <div className={styles.Features}>
        <FeaturesComponent logo={"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltcb24f0f348723b37/621f466289fbff50b638e791/discover-experiences.svg"} title="Find authentic experiences" des="Follow your curiosity, feel the joy of real discoveries, and explore more of the world."/>
        <FeaturesComponent logo={"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt86b5905785080307/621f466989fbff50b638e795/free-cancellation.svg"} title="Book with flexibility" des="Get free cancellation, plan on the go, and book last minute. Discover the world your way."/>
        <FeaturesComponent logo={"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt86b5905785080307/621f466989fbff50b638e795/free-cancellation.svg"} title="Explore the possibilities" des="Enjoy personalized recommendations and itineraries with over 60,000 guided tours, iconic attractions, and more"/>

    </div>
  )
}
