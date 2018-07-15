import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share'




import './styles.css';



class TreeCard extends Component {


    render() {
        const { classes } = this.props;
        return (
            <Card className="card">
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className='avatar'>
                            A
                        </Avatar>
                    }
                    action={
                        <IconButton>

                        </IconButton>
                    }
                    title="Teixos d'Agres"
                    subheader="Agres, Alacant"
                />
                <CardMedia
                    className='media'
                    image={require('../assets/img/taxus-baccata.jpg')}
                    title="taxus-baccata"
                />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions className="actions" disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="Share">
              <Share />
            </IconButton>
           
          </CardActions>
            </Card>
        )
    }

}

export default (TreeCard);