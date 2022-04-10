import React from 'react';
import {GridComponent} from '@syncfusion/ej2-react-grids';
import './App.css';
import data from './dataSource.json';

const App: React.FC = () => {
    return (
        <div>
            <GridComponent dataSource={data}/>
        </div>
    );
}

export default App;
