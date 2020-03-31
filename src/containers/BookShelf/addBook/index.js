import React, { useState } from 'react';
import { SearchCard } from "../../../components/UI/SearchCard";
import classes from './index.module.scss';
import shortid from 'shortid';
import { Input } from '../../../components/UI/Input';
import { Button } from '../../../components/UI/Button';
import { connect } from 'react-redux';
import * as actions from '../../../_store/action/book';

const InaddBook= (props)=>{

    const intialBookInputs= {
        BookName: {
            key: shortid.generate(),
            type: 'text',
            value: '',
            required: true
        },
        Count:{
            key: shortid.generate(),
            type: 'number',
            value: '',
            required: true
        },
        Author:{
            key: shortid.generate(),
            type: 'text',
            value: '',
            required: true
        },
        Genres: {
            key: shortid.generate(),
            type: 'text',
            value: '',
        },
        Discription:{
            key: shortid.generate(),
            type: 'text',
            value: '',
            required: true
        },
        Price:{
            key: shortid.generate(),
            type: 'number',
            value: '',
            required: true
        }
    }

    const [bookInputs,setBookInputs] = useState(intialBookInputs);
    let isAddButtonactive            = true;

    const onInputChangeHandler=(e,inputName)=>{
        const newBookInputs={
            ...bookInputs,
            [inputName]:{
                ...bookInputs[inputName],
                value: e.target.value
            }
        }
        setBookInputs(newBookInputs)
    }

    const dispalyFormInputs = ()=>{
        let formDetails=[];
        for (let el in bookInputs){
            formDetails.push({
                inputName: el,
                config: bookInputs[el]
            })
        }
        const mapInputofBook = formDetails.map(el=>{
            return <Input key={el.config.key} 
                    inputType={el.config.type} 
                    value={el.config.value} 
                    change={onInputChangeHandler} inputName={el.inputName}
                    required={el.config.required}>
                </Input>
        }) 
        return mapInputofBook;
    }

    const rearrangeImputs=()=>{
        let finalBookInputs={}
        for (let el in bookInputs){
            finalBookInputs={
                ...finalBookInputs,
                [el]: bookInputs[el].value
            } 
        }
        finalBookInputs={
            ...finalBookInputs,
            id: shortid.generate(),
            issueCount: 0
        }
        return finalBookInputs;
    }

    const submitAddBookhandler = (e)=>{
        e.preventDefault();    
        props.onAddBook(rearrangeImputs());
        setBookInputs(intialBookInputs);
    }

    const displayAddform=()=>{
        const form = <form onSubmit={submitAddBookhandler}>
                        {dispalyFormInputs()}
                        <Button type='submit' isEnable={isAddButtonactive}> Add Book</Button>
                    </form>
        return form;
    }

    return (
        <div className={classes.AddForm}>
            <SearchCard>
                <h1> Add Book</h1>
                {displayAddform()}
            </SearchCard>    
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
   return  {onAddBook: (bookInputs)=>dispatch(actions.bookAdd(bookInputs))}
}

export const AddBook= connect(null,mapDispatchToProps)(InaddBook)