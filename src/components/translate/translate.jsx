import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { PostData } from "../../fetch/fetchdata";
import Spinner from "../loading/loading";
import ExchangeImg from './exchange.png'
const Translate = () => {
    const [latin, setLatin] = useState()
    const [data, setData] = useState()
    const [exchange, setExchange] = useState(true)
    const [loading, setLoading] = useState(false)
    function AddReplyHandler(e) {
        e.preventDefault();
        setLoading(true)
        PostData(`translate`, {
            "mod": exchange ? "cyrtolat" : "lattocyr", "text": latin, "ignoreHtml": true
        })
            .then(data => {
                setLoading(false)
                console.log(data);
                setData(data.result)
            }).catch(err => console.log(err))
    }
    return (
        <>
            {
                loading && <Spinner />
            }
            <Form style={{
                flexWrap: 'wrap',
                marginTop: "200px",
                gap: "20px"
            }} onSubmit={AddReplyHandler} className="d-flex w-100 container">
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>{exchange ? "Krill" : "Latin"} </Form.Label>
                    <Form.Control onChange={(e) => setLatin(e.target.value)} type="text" placeholder="..." />
                </Form.Group>
                <Button onClick={() => setExchange(!exchange)} variant="light" style={{
                    background: "transparent",
                    display: "flex",
                    margin: "0 auto"
                }}> <img width={24} height={24} src={ExchangeImg} alt="" /></Button>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>{exchange ? " Latin" : "Krill"}</Form.Label>
                    <Form.Control value={data} type="text" placeholder="..." />
                </Form.Group>
                <Button style={{
                    width: "100%",
                    display: "block"
                }} variant="dark" type="submit">Jo'natish</Button>
            </Form>
        </>
    )
}
export default Translate