import React , {Component} from 'react';

class Sites extends Component{
    render(){
        var i = this.props.i;
        var sites = this.props.site;
        var site = sites[i];
        return(
            <div className="sites">
                 <img src={site.img} alt="sites"/>
                     <div className="infosite">
                        <div className="tehn">
                            <h5><strong>Front-end:</strong>{site.front}</h5>
                            <h5><strong>Back-end:</strong>{site.back}</h5>
                        </div>
                        <div className="client">
                        <h5><strong>{site.client}</strong></h5>
                        <a href ={site.href}>WebSite</a>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Sites;