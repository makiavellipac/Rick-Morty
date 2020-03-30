import React from 'react';
import { connect } from 'react-redux';
import {SyncLoader} from 'react-spinners'
import {fetchPosts} from '../../redux/actions/postActions'
import {Card,CardActionArea,CardContent,Typography,InputBase} from '@material-ui/core'
import './index.css'


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
        <div className="container">
            <InputBase
              placeholder="Search..."
              onChange={eventOnChangue}
              className="searchBar"
            />

            <div className="containerData">
            {
            props.data.isFetching?<SyncLoader/>
            :(props.data.posts &&
            props.data.posts.map(post => (
              <Card key={post.id} className="cards">
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
            </div>
        </div>
    )
}

export default connect((state)=>{
    return state})(CardPerson)
