import React from 'react';
import { useSelector } from 'react-redux';
import classes from './index.module.scss';

export const ViewBooks = (props) =>{
    
    const books=useSelector(state=> state.book)
    const RenderBooksTable=()=>{

      const  mapBookRows = books.map(el=>{
            return <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.BookName}</td>
                    <td>{el.Count}</td>
                    <td>{el.Author}</td>
                    <td>{el.Genre}</td>
                    <td>{el.Discription}</td>
                    <td>{el.Price}</td>
                    <td>{el.issueCount}</td>
            </tr>
        })

        return <table className={classes.bookTable}>
                <thead className={classes.bookTableHead}>
                    <tr>
                    <th>id</th>
                    <th>Book Name</th>
                    <th>Count</th>
                    <th>Author</th> 
                    <th>Genre</th>
                    <th>Discription</th>
                    <th>Price</th>
                    <th>issued Count</th>
                    </tr>
                </thead>
                <tbody className={classes.bookTableBody}>
                {mapBookRows}
                </tbody>        
        </table>

    }
    
    
    
    
    
    return (
        <div className={classes.viewBooks}>
        <h1>Books</h1>
            <div className={classes.viewBooksTable}>
                {RenderBooksTable()}
            </div>
        
        </div>)

}