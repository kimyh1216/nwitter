import { dbService, storageService } from "fbase";
import React, { useState } from "react";

const Nweet = ({nweetObj, isOwner}) =>{
    const [editing,setEditing] = useState(false)
    const [newNweet,setNewNweet] = useState(nweetObj.text)

    const onDeleteClick = async() =>{
        const ok = window.confirm('Are you sure you want to delete this nweet?')
        console.log(ok)
        if(ok){
            //delete nweet
            await dbService.doc(`nweets/${nweetObj.id}`).delete()
            await storageService.refFromURL(nweetObj.attachmentUrl).delete()
        }
    }
    const toggleEditing = () => setEditing((prev)=>!prev)
    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(nweetObj, newNweet)
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text:newNweet
        })
        setEditing(false)
    }
    const onChange = (event) => {
        const {target:{value}} =event
        setNewNweet(value)
    }
    return(
    <div>
        {
            editing ? 
            (
                <>
                <form onSubmit={onSubmit}>
                    <input value={newNweet} onChange={onChange} placeholder="Edit your nweet." required />
                    <input type='submit' value='Update Nweet' />
                </form>
                <button onClick={toggleEditing}>Cancel</button>
                </>
            )
             :
            <>
            <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} width={50} height={50} /> }
            {isOwner && (
                <>
                <button onClick={onDeleteClick}>Delete Nweet</button>
                <button onClick={toggleEditing}>Edit Nweet</button>
                </>
            )}
            </>
        }
    </div>
    )
}
export default Nweet