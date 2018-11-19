import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Timeline</p>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Software Developer Intern" subtitle="Amazon"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            May	2018 - August 2018. Cross Channel Marketing Austin, Implemented a feature into an internal marketing tool to reduce look up time by eighty percent.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>React</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Docker</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Java Guice</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Simple Queue Service</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>AWS Fargate</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>AWS DynamoDB</Chip>
                                </div>

                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Undergraduate Research Assistant" subtitle="Face Perception Lab at University Of Texas at Dallas"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          November 2016 - Present.
                          Helped analyze large scale datasets and make actionable recommendations to improve performance of the algorithm.
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Matlab</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>R</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Convulated Neural Networks</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                
            </div>
        );
    }
}

export default TimelineComponent;
