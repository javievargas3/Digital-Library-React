import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseAuthor, chooseTitle, chooseLength, chooseType } from '../Redux/slices/RootSlice';
import { Input } from '../components/SharedComponents';
import { Button } from '@material-ui/core';

import { server_calls } from '../api';

interface ContactFormProps {
    id?:string;
    data?:{}
}

interface ContactState {
    author: string;
    title: string;
    length: string;
    type: string;
}

export const ContactForm = (props:ContactFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const author = useSelector<ContactState>(state => state.author);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseAuthor(data.author));
            dispatch(chooseTitle(data.title));
            dispatch(chooseType(data.type));
            dispatch(chooseLength(data.length));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Book Library</label>
                    <Input {...register('author')} name="author" placeholder='Name'/>
                </div>
                <div>
                    <label htmlFor="title">title</label>
                    <Input {...register('title')} name="title" placeholder='title'/>
                </div>
                <div>
                    <label htmlFor="type">type</label>
                    <Input {...register('type')} name="type" placeholder='type'/>
                </div>
                <div>
                    <label htmlFor="length">length</label>
                    <Input {...register('length')} name="length" placeholder='length'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}