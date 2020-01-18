import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Comentario extends Component {

    render() {
        return(
            <div>
                { 
                    this.props.foto.likers.length > 0 ?
                        this.props.foto.likers.length > 1 ?
                            <div className="foto-info-likes">
                                {this.props.foto.likers.map(liker =>
                                    <Link key={liker.login} href={`/timeline/${liker.login}`}>{liker.login}, </Link>)}curtiram
                            </div>
                        :
                            <div className="foto-info-likes">
                                {this.props.foto.likers.map(liker =>
                                    <Link key={liker.login} href={`/timeline/${liker.login}`}>{liker.login}</Link>)} curtiu
                            </div>
                    : null 
                    }
            </div>
        )

    }
}