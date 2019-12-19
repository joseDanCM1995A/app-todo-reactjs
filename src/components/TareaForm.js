import React, {Component} from 'react'

class TareaForm extends Component{
    constructor() {
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            fecha: '',
            prioridad: 'baja'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
          titulo: '',
          responsable: '',
          descripcion: '',
          fecha: '',
          prioridad: 'baja'
        });
      }
    
      handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }

    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                        type="text"
                        name="titulo"
                        className="form-control"
                        value={this.state.titutlo}
                        onChange={this.handleInputChange}
                        placeholder="titulo"
                        />
                    </div>

                    <div className="form-group">
                        <input
                        type="text"
                        name="responsable"
                        className="form-control"
                        value={this.state.responsable}
                        onChange={this.handleInputChange}
                        placeholder="responsable"
                        />
                    </div>

                    <div className="form-group">
                        <input
                        type="text"
                        name="descripcion"
                        className="form-control"
                        value={this.state.descripcion}
                        onChange={this.handleInputChange}
                        placeholder="descripcion"
                        />
                    </div>

                    <div className="form-group">
                        <input
                        type="text"
                        name="fecha"
                        className="form-control"
                        value={this.state.fecha}
                        onChange={this.handleInputChange}
                        placeholder="fecha"
                        />
                    </div>

                    <div className="form-group">
                        <select
                            name="prioridad"
                            className="form-control"
                            value={this.state.prioridad}
                            onChange={this.handleInputChange}

                        >
                            <option>baja</option>
                            <option>media</option>
                            <option>alta</option>

                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default TareaForm;