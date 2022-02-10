import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActivities } from '../../redux/actions';
import Activities from '../../components/Activities/Activities';

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getActivities();
  }

  componentDidUpdate() {
    if (this.props.reduxActivities.length > 0) {
      if (this.state.loading) this.setState({loading: false})
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? <p>Loading...</p> : <Activities activities={this.props.reduxActivities} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ reduxActivities: state.activities })

const mapDispatchToProps = {
  getActivities: () => getActivities()
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer)