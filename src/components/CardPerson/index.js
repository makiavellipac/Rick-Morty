import React from 'react';
import { connect } from 'react-redux';
import {SyncLoader} from 'react-spinners'
import {fetchPosts} from '../../redux/actions/postActions'
import {Card,CardActionArea,CardContent,Typography,InputBase} from '@material-ui/core'



function CardPerson (props){
    console.log(props)
    const busqueda = (text)=>{
      props.dispatch(fetchPosts(text))
    }
    
   const eventOnChangue = e=>{
     const newText=e.target.value;
     busqueda(newText)
   }

   
    return(
        <>
            <InputBase
              placeholder="Search..."
              onChange={eventOnChangue}
            />

            
            {props.data.isFetching?<SyncLoader/>
            :(
            props.data.posts.map(post => (
              <Card key={post.id}>
              <CardActionArea>
                <img src={post.image} alt={post.name} key={post.id}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              
              </Card> 
              
            )))}
            
        </>
    )
}

export default connect((state)=>{
    return state})(CardPerson)
