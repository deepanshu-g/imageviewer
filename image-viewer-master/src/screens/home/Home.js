import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';
import FavoriteIconBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIconFill from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {constants} from '../../common/utils'

const styles =  theme => ({
  card: {
    maxWidth: 1100,
  },
  avatar: {
    margin: 10,
  },
  media: {
    height:0,
    paddingTop: '56.25%', // 16:9
  },
  formControl: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline',
  },
  comment:{
    display:'flex',
    alignItems:'center'
  },
  hr:{
    marginTop:'10px',
    borderTop:'2px solid #f2f2f2'
  },
  gridList:{
    width: 1100,
    height: 'auto',
    overflowY: 'auto',
  },
  grid:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:90
  }
});
