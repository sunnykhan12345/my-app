import React from 'react'
import {motion} from "framer-motion"
 const Test = () => {

  const varients ={
    visiable : {
      opacity:1,
      x:100,
      transition:{staggerChildren:1}
    },
    hidden:{
      opacity:0,
    }
  }

  // updted

  const item = ["item1", "item2", "item3", "item4"]
  return (
    <>
    <div className="course">
        <motion.ul initial="hidden" animate="visiable" variants={varients}>
         {
          item.map((item) =>
          {
            return(
              <>
              <motion.li variants={varients} key={item} >{item}</motion.li>
              </>
            )
          })
         }
        </motion.ul>
     </div>
     </>
  )
}

export default Test;
