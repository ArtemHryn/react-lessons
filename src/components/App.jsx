import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import { CounterNew } from './CounterNew/CounterNew';
// import { PokemonForm } from './Pokemon/PokemonForm';
// import { PokemonInfo } from './Pokemon/PokemonInfo';
// import { NewClock } from './Clock';
// import { ColorPicker } from './ColorPicker';
// import { SignupForm } from './SignUp/SignUp';
// import { TranslateApp } from './TranslateApp/TranslateApp';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export class App extends Component {
  state = {
    pokemonName: '',
  };

  onSearchSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      setTimeout(async () => {
        this.setState({ loading: false });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <CounterNew />
        {/* <PokemonForm onFormSubmit={this.onSearchSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        /> */}
        {/* <TranslateApp /> */}
      </>
    );
  }
}
