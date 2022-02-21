import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>21 de Fevereiro de 2022</time>
                        <strong>JAMstack: geleia de JavaScript, API e Markup</strong>
                        <p>
                            O que significa e por que é considerada uma arquitetura moderna de desenvolvimento web? Uma arquitetura moderna de desenvolvimento, vista como vanguarda na renascença de web sites estáticos, e com nome de um doce popularmente conhecido como GELEIA.
                        </p>
                    </a>
                    <a href="#">
                        <time>21 de Fevereiro de 2022</time>
                        <strong>JAMstack: geleia de JavaScript, API e Markup</strong>
                        <p>
                            O que significa e por que é considerada uma arquitetura moderna de desenvolvimento web? Uma arquitetura moderna de desenvolvimento, vista como vanguarda na renascença de web sites estáticos, e com nome de um doce popularmente conhecido como GELEIA.
                        </p>
                    </a>
                    <a href="#">
                        <time>21 de Fevereiro de 2022</time>
                        <strong>JAMstack: geleia de JavaScript, API e Markup</strong>
                        <p>
                            O que significa e por que é considerada uma arquitetura moderna de desenvolvimento web? Uma arquitetura moderna de desenvolvimento, vista como vanguarda na renascença de web sites estáticos, e com nome de um doce popularmente conhecido como GELEIA.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}