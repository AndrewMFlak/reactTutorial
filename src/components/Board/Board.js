import React from 'react';
import Square from '../Square/Square';
//helper function "calculateWinner" imported to use in handleClick event;
import calculateWinner from '../calculateWinner/calculateWinner';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //this.state.squares is an array of nine null elements
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    handleClick(i) {
        //this.state.squares.slice() used to create a new array to avoid mutating state directly 
        const squares = this.state.squares.slice();
        console.log(squares);
        if(calculateWinner(squares)|| squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    renderSquare(i) {
        return (
        <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />
        );
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}
export default Board;