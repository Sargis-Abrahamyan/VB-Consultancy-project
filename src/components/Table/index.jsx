import React from "react";
import { useGlobalContext } from "../../context";
// icon
import done from "../../images-logos/done.png";
import none from '../../images-logos/none.png'
// css
import styles from "./tableItem.module.css";

const Table = () => {
    const { membership } = useGlobalContext()

    return (
        <table className={styles.table}>
            <tbody className={styles.tbody}>
                <tr className={styles.list1}>
                    <th className={styles.listTh}></th>
                    {membership.map((i) => (
                        <td key={i.id}>{i.title}</td>
                    ))}
                </tr>
                <tr>
                    <th>Basic</th>
                    {membership.map((i) => {
                        return <td key={i.id}>
                            {
                                typeof i.basic === 'number' ? i.basic :
                                    typeof i.basic === 'boolean' && i.basic === true ?
                                        <img src={done} alt={"done"} /> :
                                        <img src={none} alt="x" />
                            }
                        </td>
                    })}
                </tr>
                <tr>
                    <th>Standard</th>
                    {membership.map((i) => (
                        <td key={i.id}>{
                            typeof i.standard === 'number' ? i.standard :
                                typeof i.standard === 'boolean' && i.standard === true ?
                                    <img src={done} alt={"done"} /> :
                                    <img src={none} alt="x" />
                        } </td>
                    ))}
                </tr>

                <tr>
                    <th>Advanced</th>
                    {membership.map((i) => {
                        return <td key={i.id}>{
                            typeof i.advanced === 'number' ? i.advanced :
                                typeof i.advanced === 'boolean' && i.advanced === true ?
                                    <img src={done} alt={"done"} /> :
                                    <img src={none} alt="x" />
                        }</td>
                    })}
                </tr>
            </tbody>
        </table>
    );
};

export default Table
