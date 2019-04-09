import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image from 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg';

// import tileData from './tileData'; we cant import this so just delete this because we dont have this file


// ======================================================
// THIS IS FOR STYLING OKAY? ok!
// ======================================================
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});


// ====================================

// The example data is structured as follows:



const tileData = [
    {
        img: image,
        title: 'Brad Putt',
        author: 'aslkjf',
    },
    {
        img: image,
        title: 'who;s this ',
        author: 'idk',
    },
    {
        img: image,
        title: 'alksjdlaksjd',
        author: 'lallaladfsl ',
    },
    {
        img: image,
        title: 'aher oha ohas da ',
        author: 'vadfvjkannv;jakdnv',
    },
];




// ====================================
class Home extends Component {

    // ignore this section because this has got to do with the functionning of the app, not the structure
    constructor(props){
        super(props);

        this.state = {

        }
    }

    // =================================================================================

    render() {
        // HWE?? where is it?
        const { classes } = this.props;

        return ( // HWE

            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton>
                                        <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }



    // =================================================================================
    taANA
}

//ignore this bit
Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)
