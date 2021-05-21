import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Coutput from './output';
import Badge from 'react-bootstrap/Badge';
import {Container,Row,Col, Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

//import {useHistory} from 'react-router-dom'

function Cinput() {
    const { register, handleSubmit } = useForm()
    const [mood, setmood] = useState('')

    // const history=useHistory()


    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("select_file", data.select_file[0])


        const res = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            body: formData,

        }).then((resp) => resp.json()).then(data => {
            setmood(data)


            //history.push({pathname:'/predict',state:{mood:moods}})
        })




    }

    console.log(mood)

    return (
        <Card style={{ width: '650px' }}>

            {
                (mood.length === 0) ? //input page
                    <div>
                        <br/>
                        <div >
                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("select_file")} type="file" name="select_file" />

                                <Button variant="danger" type='submit'>Submit</Button>

                            </form>
                        </div>
                        <br/>
                    </div> :    //output page
                    <div>

                        <Coutput data={mood} />
                    </div>
            }

        </Card>

    )
}
export default Cinput