import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Button.module.css"

const Button = ({ to, content, width, height, bgColor, fontSize = 24, onclick }) => <Link onClick={onclick} className={styles.btnStyle} style={{ width, height, backgroundColor: bgColor, fontSize }} to={to}>{content}</Link>

export default Button
