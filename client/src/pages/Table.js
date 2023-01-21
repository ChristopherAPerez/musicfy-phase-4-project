import React from "react";

function Table({ song }) {


    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td><button>▶️</button></td>
                        <td>{song.title}</td>
                        <td>Ft.{song.feature}</td>
                        <td>
                            <strong>
                            {song.hours} : {song.minutes} : {song.seconds}
                            </strong>
                        </td>
                        <td>{song.streams}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;