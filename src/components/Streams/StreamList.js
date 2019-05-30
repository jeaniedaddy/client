import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams} from '../../actions';

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <button className="ui button negative">Delete</button>
                </div>
            );
        }
    }
    renderList=()=>{
        if(this.props.streams.length > 0){
            const aa =  this.props.streams.map(a=> {
                return (
                    <div className='item' key={a.id}> 
                        {this.renderAdmin(a)}
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            {a.title}
                            <div className="description">{a.description}</div>
                        </div>
                    </div>
                );
            }); 
            return aa; 
        }
        return null; 
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className='ui button primary'>Create Stream</Link>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                <h2> Streams</h2>
                <div className='ui celled list'>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
    
}

const mapStateToProps = (state)=> {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);