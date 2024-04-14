import Card from 'react-bootstrap/Card';
import Zoom from 'react-reveal/Zoom';

export const Cards = ({ datacard }) => {

    return (
        <div className='my-5'>
            {(datacard.length) ?
                datacard.map(item => {
                    return (
                        <Zoom>

                            <Card className='flex my-3'>
                                <Card.Img variant="top" src={item.pic} />
                                <Card.Body>
                                    <div className='flex ' style={{ justifyContent: "space-between" }}>
                                        <Card.Title>{item.title}</Card.Title>
                                        <p>price: {item.price}</p>
                                    </div>
                                    <Card.Text>{item.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>

                    )

                })
                : <h3>لا يوجد تصنيفات</h3>}


        </div>
    )
}
