import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {


      return (  
        <div>
          
          <table className="table table-bordered">
            <tbody>
            {
                Object.entries(this.props.emotions.emotion).map((details)=> {
                    return <tr>
                        <td>{details[0]} </td>
                        <td> {details[1]} </td>
                    </tr>
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
