import React, { Component } from 'react';
import { Link } from 'react-router';
import Comentario from './Comentario';

class FotoHeader extends Component {
    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src={this.props.foto.urlPerfil} alt="foto do usuario" />
                    <figcaption className="foto-usuario">
                        <Link to={`/timeline/${this.props.foto.loginUsuario}`}> {this.props.foto.loginUsuario} </Link>
                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.foto.horario}</time>
            </header>
        );
    }
}

class FotoInfo extends Component {

    render() {
        return (
            <div className="foto-info">
                    { /*
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
                        :
                        <div className="foto-info-likes"></div>  */
                    }
                    
                <Comentario foto={this.props.foto}/>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor"> {this.props.foto.loginUsuario} </a>
                    {this.props.foto.comentario}
                </p>

                <ul className="foto-info-comentarios">
                    {
                        this.props.foto.comentarios.map(comentario => {
                            return (
                                <li className="comentario" key={comentario.id}>
                                    <Link to={`/timeline/${comentario.login}`} className="foto-info-autor">{comentario.login} </Link>
                                    {comentario.texto}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

class FotoAtualizacoes extends Component {

    like(evento) {
        evento.preventDefault();
        this.props.like(this.props.foto.id);
    }

    comenta(evento) {
        evento.preventDefault();
        this.props.comenta(this.props.foto.id, this.comentario.value);
    }

    render() {
        return (
            <section className="fotoAtualizacoes">
                <a onClick={this.like.bind(this)} className={this.props.foto.likeada ? 'fotoAtualizacoes-like-ativo' : 'fotoAtualizacoes-like'}>Likar</a>
                <form className="fotoAtualizacoes-form" onSubmit={this.comenta.bind(this)}>
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" ref={input => this.comentario = input} />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>

            </section>
        );
    }
}

export default class Foto extends Component {
    render() {
        return (
            <div className="foto">
                <FotoHeader foto={this.props.foto} />
                <img alt="foto" className="foto-src" src={this.props.foto.urlFoto} />
                <FotoInfo foto={this.props.foto} />
                <FotoAtualizacoes {...this.props} />
            </div>
        );
    }
}