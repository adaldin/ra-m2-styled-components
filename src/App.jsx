import { Text } from './components/atoms';
import { Body } from './components/layout';
import Grid from './styles/Grid';

function App() {
  return (
    <Body>
      <Text as="h1">Hola a todos</Text>
      <Text>Buenas tardes</Text>
      <ul>
        <Text as="li">A</Text>
        <Text as="li">B</Text>
        <Text as="li">C</Text>
      </ul>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between ',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Grid>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
          <div style={{ backgroundColor: 'blue', padding: '5rem' }}></div>
        </Grid>
        <div style={{ backgroundColor: 'red', padding: '20rem' }}></div>
      </div>
    </Body>
  );
}

export default App;
