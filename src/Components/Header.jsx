import { Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

export const Header = ({ datacard, setdata, arrdata }) => {
    const titleButtons = ["الكل", ...new Set(arrdata.map(i => i.title))];
    const filteration = (par) => {
        (par == "الكل") ? setdata(arrdata) : setdata(arrdata.filter(i => { return i.title === par }))
    }
    return (
        <Row >
            <p className="text-center my-3">
                قائمة الطعام
            </p>
            <div className="border "></div>
            <div className="text-center my-2">
                {titleButtons.map(i => {
                    return (
                        <Button variant="outline-warning" className="mx-2" onClick={() => { filteration(i) }}>{i}</Button>)
                })}
            </div>
        </Row>
    )
}
