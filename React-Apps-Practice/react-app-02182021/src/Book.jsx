import React from 'react'
import { data } from './tempo';

const Book = () => {

     return <div className="row bg-warning text-center p-0">
     <div className="col p-0"><img src={data[1].img} alt="The cover" /></div>
     <div className="col p-0"><img src={data[2].img} alt="The cover" /></div>
     <div className="col p-0"><img src={data[0].img} alt="The cover" /></div>

</div>
}

export default Book;
