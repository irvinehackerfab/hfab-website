import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
    return (
        <PageHeader eyebrow="Error 404" title="404 - Page Not Found">
            <p>The page you are looking for does not exist.</p>
            <div className={styles.Actions}>
                <Link className="Btn BtnPrimary" to={"/"}>
                    Learn More <FiArrowRight aria-hidden="true" />
                </Link>
            </div>
        </PageHeader>
    );
}

export default ErrorPage;
