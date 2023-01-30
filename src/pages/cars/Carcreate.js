import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from '../../components/card/card';
import {  Modal } from 'antd';
import InputType from '../../components/input/inputtype';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Button from '../../components/button/Button';
function Carcreate() {
  const [cardata, setcardata] = useState()
  const [carname, setCarname] = useState()
  const [carprice, setcarprice] = useState()
  const [carimg, setcarimg] = useState()

  const [editcarname, seteditcarname]= useState()
  const [editcarprice,seteditcarprice] = useState()
  const [editcarimg, seteditcarimg]= useState()
  const [carid,setcarid]= useState()

  // const [viewUnitModal, setViewUnitModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  }

  const [editmodal,seteditmodal]= useState(false)
  const editshowmodal = (itm,indx)=>{
  console.log("edit list isss", itm)
   seteditcarname(itm.car_name)
   seteditcarprice(itm.car_price)
   seteditcarimg(itm.car_image)
    seteditmodal(true)
  }
 

  // const {  LoadingOutlined, PlusOutlined  } = icons;
  // const {  message, Upload  } = antd;
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  // const handleChange = (info) => {
  //   if (info.file.status === 'uploading') {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const getallcars = async () => {
    try {
      const allcars = await axios.get(
        `http://localhost:5000/`)
      console.log("all cars are ::", allcars.data)
      // console.log("deleteeecaridd",allcars.data.)
allcars.data.map((i,index)=>{
  console.log("deleteeecaridd",i.car_id)
  setcarid(i.car_id)
})

      let arr = []
      allcars?.data.forEach((i, indx) => {
        arr.push(i)
      })
      console.log("dats inn", arr)
      setcardata(arr)
      // if(allunits?.data.success){}
    }
    catch (err) {
      console.log("error to getting all units", err)
    }

  }

  useEffect(() => {
    getallcars()
  }, [])


  // const OnSubmit = () => {
  //   const formData = new FormData();

  //   formData.append("brand_pic", img);
  //   formData.append("brand_description", description);
  //   formData.append("brand_name", brand);

  //   PublicFetch.post(`http://localhost:5000/`, formData, {
  //     "Content-Type": "Multipart/form-Data",
  //   })
  //     .then((res) => {
  //       console.log("success", res);
  //       if (res.data.success) {
  //         setSuccessPopup(true);
  //         addForm.resetFields();
  //         close_modal(successPopup, 1000);
  //       } else {
  //         console.log("", res.data.data);
  //         setBrandError(res.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //       setError(true);
  //     })
  // };

  const handleOk = () => {
    submitaddunit()
    // setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleedit = () => {
    submitaddunit()
    // setIsModalOpen(false);
  };
  const handleCanceledit = () => {
    seteditmodal(false);
  };

  const submitaddunit = async () => {
    try {
      const formData = new FormData();

      formData.append("car_name", carname);
      formData.append("car_price", carprice);
      formData.append("car_image", carimg);

      const addunit = await axios.post(
        `http://localhost:5000/`, formData, {
        "Content-Type": "Multipart/form-Data",
      })
      console.log("car data is added ", addunit)
    }
    catch (err) {
      console.log("err to add the unit", err)
    }

  }

  const handleDeleteClick = async(id)=>{
try{
  const deletecars = await axios.delete(
    `http://localhost:5000/`,
    {
   
    }
    )
}
catch{

}

}



  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );


  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Car Details</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Add Car</Nav.Link> */}
                     <Button btnType="save" onClick={showModal}>Add Car</Button>
                    {/* < onClick={showModal}>Add Car</Button> */}
                    <Nav.Link href="#link">Link</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <div className="row mt-4 ">
              {cardata && cardata?.length > 0 && cardata.map((item, indx) => {
                console.log("dhdj", item)
                return (
                  <div className="col-xl-4 col-lg-4 col-12">
                    <Card className="my-3"
                    // image={`${`http://localhost:5000/uploads`}` }
                      carname={item.car_name}
                      carprice={item.car_price}
                      children={<div className="d-flex justify-content-evenly">
                       <Button btnType="save" onClick={()=>{editshowmodal(item)}}  >Edit</Button>
                       <Button btnType="save" onClick={()=>{handleDeleteClick(item.car_id) }} >Delete</Button>
                      </div> }
                    />
                  </div>
                )
              })}

            </div>


            <Modal title="Add Car" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

              <div className="row">
                <div className=" col-xl-4 col-lg-4 col-12">
                  <label>Car Name</label>
                  <InputType value={carname}  onChange={(e)=>setCarname(e.target.value)} />
                </div>
                <div className=" col-xl-4 col-lg-4 col-12">
                  <label>Car Price </label>
                  <InputType value={carprice} 
                  onChange={(e)=>setcarprice(e.target.value)}
                  />
                </div>
              </div>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                // onChange={handleChange}
                onChange={(file) => {
                  console.log("Before upload", file.file);
                  console.log("Before upload file size", file.file.size);

                  // if (file.file.size > 1000 && file.file.size < 500000) {
                  //   setImg(file.file.originFileObj);
                  //   setImgSizeError(false);
                  //   console.log(
                  //     "Image must be greater than 1 kb and less than 500 kb"
                  //   );
                  // } else {
                  //   console.log("failed beacuse of large size");
                  //   setImgSizeError(true);
                  // }
                }}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      width: '100%',
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>


            </Modal>

{/* edit*** */}

            <Modal title="Add Car" open={editmodal} 
            onOk={handleedit}
            
            onCancel={handleCanceledit}>

<div className="row">
  <div className=" col-xl-4 col-lg-4 col-12">
    <label>Car Name</label>
    <InputType value={editcarname}  onChange={(e)=>setCarname(e.target.value)} />
  </div>
  <div className=" col-xl-4 col-lg-4 col-12">
    <label>Car Price </label>
    <InputType value={editcarprice} 
    onChange={(e)=>setcarprice(e.target.value)}
    />
  </div>
</div>
<Upload
  name="avatar"
  listType="picture-card"
  className="avatar-uploader"
  showUploadList={false}
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  beforeUpload={beforeUpload}
  // onChange={handleChange}
  onChange={(file) => {
    console.log("Before upload", file.file);
    console.log("Before upload file size", file.file.size);

    // if (file.file.size > 1000 && file.file.size < 500000) {
    //   setImg(file.file.originFileObj);
    //   setImgSizeError(false);
    //   console.log(
    //     "Image must be greater than 1 kb and less than 500 kb"
    //   );
    // } else {
    //   console.log("failed beacuse of large size");
    //   setImgSizeError(true);
    // }
  }}
>
  {imageUrl ? (
    <img
      src={imageUrl}
      alt="avatar"
      style={{
        width: '100%',
      }}
    />
  ) : (
    uploadButton
  )}
</Upload>


</Modal>



          </div>
        </div>
      </div>
    </>
  )
}
export default Carcreate;