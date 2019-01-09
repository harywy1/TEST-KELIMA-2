import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/Comment';


const styles = theme => ({

  
  card: {
    maxWidth: 500,
    padding:'400px',
    paddingTop:'20px',
    marginTop: theme.spacing.unit * 15,
 
  },
  media: {
    height: 20,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(20deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: '0',
    [theme.breakpoints.up('sm')]: {
      marginRight: 40,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[300],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (

      <div className="card">
      <Card className={classes.card} >
        <div className="image">
        <CardMedia
          className={classes.media}
          
          image="http://www.destination360.com/asia/china/images/s/himalayas-mountains.jpg" alt="himalaya"
        />
        </div> 
        <div className="avatar">
         <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              ⁂
            </Avatar>
          }
          
          title="Instagram"
          subheader="Himalaya"
        />
        </div>
        <div className="caption">
        <CardContent>
          <Typography component="p">
            nocapt                                                                                                                                                                                     
            <p>by: Someone</p>
          </Typography>
        </CardContent>
        </div>
        <CardActions className={classes.actions} disableActionSpacing>
          
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Comment">
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
       
      </Card>
      </div> 
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);