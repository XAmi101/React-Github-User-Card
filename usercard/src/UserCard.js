
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const CardCreator = (props) => (
  <Card.Group centered items>
<Card >
    <Image size='large' src={props.user.avatar_url}  circular wrapped ui={false}  />
    <Card.Content>
      <Card.Header>{"Username: " + props.user.login}</Card.Header>
      <Card.Header>{"ID: " + props.user.id}</Card.Header>
    </Card.Content>
    <Card.Content extra>
     <a>
       <Icon name='user' />
       <Card.Header>{props.user.followers + " followers"} </Card.Header>
     </a>
   </Card.Content>
  </Card>  </Card.Group>

)

export default CardCreator
