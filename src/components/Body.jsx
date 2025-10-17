// import "./Body.css";
// import { Field, Form, Formik, useFormik } from "formik";
// import { useEffect, useState } from "react";
// import * as yup from "yup";
// import {
//   Asterisk,
//   CloudDrizzle,
//   Download,
//   Hash,
//   House,
//   Trash2,
// } from "lucide-react";
// import { useRef } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const Body = () => {
//   // DOWNLOADING PDFs
//   const invoiceRef = useRef();

//   // const downloadPDF = async () => {
//   //   const element = invoiceRef.current; // The section you want to download
//   //   const canvas = await html2canvas(element); // Take screenshot
//   //   const imgData = canvas.toDataURL("image/png"); // Convert screenshot to image

//   //   const pdf = new jsPDF("p", "mm", "a4"); // Create A4 PDF
//   //   const pageWidth = pdf.internal.pageSize.getWidth();
//   //   const pageHeight = pdf.internal.pageSize.getHeight();

//   //   // Calculate image dimensions
//   //   const imgWidth = pageWidth;
//   //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

//   //   pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
//   //   pdf.save("invoice.pdf"); // Downloads the file
//   // };

//   const [businessName, setBusinessName] = useState("");
//   const [clientName, setClientName] = useState("");

//   // Run prompts only once when page first loads
//   useEffect(() => {
//     const biz = prompt("What's your business name ?");
//     const client = prompt("What's your client name ?");
//     setBusinessName(biz || "Your Business");
//     setClientName(client || "Client Name");
//   }, []); // <-- empty dependency array = runs only once

//   // ... your other code

//   const [items, setItems] = useState([
//     { description: "", qty: 0, rate: 0, amount: 0 },
//   ]);

//   const addItem = () => {
//     setItems((prev) => [
//       ...prev,
//       { description: "", qty: 0, rate: 0, amount: 0 },
//     ]);
//   };

//   const deleteItem = (index) => {
//     setItems((prev) => prev.filter((_, i) => i !== index));
//   };

//   // 🧮 Handle qty or rate change for a specific item
//   const handleChange = (index, field, value) => {
//     setItems((prev) =>
//       prev.map((item, i) =>
//         i === index
//           ? {
//               ...item,
//               [field]: field === "description" ? value : Number(value), // text stays text
//               amount:
//                 field === "qty"
//                   ? Number(value) * item.rate
//                   : field === "rate"
//                   ? item.qty * Number(value)
//                   : item.amount, // don't change amount when typing description
//             }
//           : item
//       )
//     );
//   };
//   // const [Biz, setBiz] = useState("**");
//   // const [Client, setClient] = useState("**")
//   const [InvoiceNum, setinvoiceNum] = useState("INV-001");
//   const [InvoiceDate, setInvoiceDate] = useState("2024-05-02");
//   const [InvoiceDueDate, setInvoiceDueDate] = useState("2024-05-03");
//   // const formik = useFormik({
//   //   initialValues: {
//   //     invoiceNum: "",
//   //     invoiceDate: "",
//   //     dueDate: "",
//   //     BusinessName: "",
//   //     emailVal: "",
//   //     PhoneVal: "",
//   //     ClientName: "",
//   //     ClientPhone: "",
//   //     ClientAddress: "",
//   //     itemDescription: "",
//   //     itemQty: "",
//   //     itemRate: "",
//   //     itemAmount: "",
//   //     TaxRate: "",
//   //     ClientEmailVal: "",
//   //   },
//   //   validationSchema: yup.object({
//   //     invoiceNum: yup.string().required("*This field is required"),
//   //     invoiceDate: yup.string().required("*This field is required"),
//   //     dueDate: yup.string().required("*This field is required"),
//   //     BusinessName: yup.string().required("*This field is required"),
//   //     PhoneVal: yup.string().required("*This field is required"),
//   //     clientName: yup.string().required("*This field is required"),
//   //     ClientPhone: yup.string().required("*This field is required"),
//   //     ClientAddress: yup.string().required("*This field is required"),
//   //     itemDescription: yup.string().required("*This field is required"),
//   //     itemQty: yup.string().required("*This field is required"),
//   //     itemRate: yup.string().required("*This field is required"),
//   //     itemAmount: yup.string().required("*This field is required"),
//   //     TaxRate: yup.string().required("*This field is required"),
//   //     emailVal: yup
//   //       .string()
//   //       .required("*This Field is required!")
//   //       .email("*Email must be Valid"),
//   //   }),
//   //   onSubmit: async (values) => {
//   //     // ✅ If we get here, validation passed — so we can download safely
//   //     const element = invoiceRef.current;
//   //     const canvas = await html2canvas(element);
//   //     const imgData = canvas.toDataURL("image/png");
//   //     const pdf = new jsPDF("p", "mm", "a4");
//   //     const pageWidth = pdf.internal.pageSize.getWidth();
//   //     const imgHeight = (canvas.height * pageWidth) / canvas.width;
//   //     pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
//   //     pdf.save("invoice.pdf");
//   //   },
//   // });

//   const formik = useFormik({
//     initialValues: {
//       invoiceNum: "",
//       invoiceDate: "",
//       dueDate: "",
//       BusinessName: "",
//       emailVal: "",
//       PhoneVal: "",
//       ClientName: "",
//       ClientPhone: "",
//       ClientAddress: "",
//       itemDescription: "",
//       itemQty: "",
//       itemRate: "",
//       itemAmount: "",
//       TaxRate: "",
//       ClientEmailVal: "",
//     },
//     validationSchema: yup.object({
//       invoiceNum: yup.string().required("*This field is required"),
//       invoiceDate: yup.string().required("*This field is required"),
//       dueDate: yup.string().required("*This field is required"),
//       BusinessName: yup.string().required("*This field is required"),
//       PhoneVal: yup.string().required("*This field is required"),
//       ClientName: yup.string().required("*This field is required"),
//       ClientPhone: yup.string().required("*This field is required"),
//       ClientAddress: yup.string().required("*This field is required"),
//       itemDescription: yup.string().required("*This field is required"),
//       itemQty: yup.string().required("*This field is required"),
//       itemRate: yup.string().required("*This field is required"),
//       TaxRate: yup.string().required("*This field is required"),
//       emailVal: yup
//         .string()
//         .email("*Email must be valid")
//         .required("*This field is required"),
//     }),
//     onSubmit: async (values) => {
//       // ✅ If we get here, validation passed — so we can download safely
//       const element = invoiceRef.current;
//       const canvas = await html2canvas(element);
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const imgHeight = (canvas.height * pageWidth) / canvas.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
//       pdf.save("invoice.pdf");
//     },
//   });

//   return (
//     <>
//       <section className="sec1">
//         <div className="sec1_container">
//           <div className="sec1_head">
//             <Hash size={20} strokeWidth={3} color="blue" />
//             <h2>Invoice Details</h2>
//           </div>
//           <div className="sec1_content">
//             <Formik>
//               <Form>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Invoice Number
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="text"
//                     name="invoiceNum"
//                     placeholder="INV-001"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />

//                   {formik.touched.invoiceNum && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.invoiceNum}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Invoice Date
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="date"
//                     name="invoiceDate"
//                     onChange={(z) => {
//                       {
//                         formik.handleChange(z);
//                       }
//                       setInvoiceDate(z.target.value);
//                     }}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.invoiceDate && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.invoiceDate}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Due Date
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="date"
//                     name="dueDate"
//                     onChange={(d) => {
//                       {
//                         formik.handleChange(d);
//                       }
//                       setInvoiceDueDate(d.target.value);
//                     }}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.dueDate && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.dueDate}
//                     </div>
//                   )}
//                 </div>
//               </Form>
//             </Formik>

//             <h2 className="business_h2">
//               <House size={21} color="blue" strokeWidth={2} /> From{" "}
//               {businessName + " Business"}
//             </h2>

//             <Formik>
//               <Form>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     {"Business Name"}
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="text"
//                     name="BusinessName"
//                     placeholder="Your Business Name"
//                     onChange={(b) => {
//                       {
//                         formik.handleChange(b);
//                       }
//                       setBiz(b.target.value);
//                     }}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.BusinessName && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.BusinessName}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Email
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="email"
//                     name="emailVal"
//                     placeholder="business@example.com"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.emailVal && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.emailVal}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Phone
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="number"
//                     name="PhoneVal"
//                     placeholder="+1 (555) 123-4567"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.PhoneVal && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.PhoneVal}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Address
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <textarea
//                     name="Address"
//                     placeholder="123 Business St, City, State, ZIP"
//                   ></textarea>
//                 </div>
//               </Form>
//             </Formik>

//             <h2 className="business_h2">
//               <CloudDrizzle size={21} color="blue" strokeWidth={3} /> To{" "}
//               {clientName}
//             </h2>

//             <Formik>
//               <Form>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     {"Client Name"}
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="text"
//                     name="ClientName"
//                     placeholder="Your Client Name"
//                     onChange={(c) => {
//                       {
//                         formik.handleChange(c);
//                       }
//                       setClient(c.target.value);
//                     }}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.ClientName && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.ClientName}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Email
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="email"
//                     name="ClientEmailVal"
//                     placeholder="business@example.com"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.ClientEmailVal && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.ClientEmailVal}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Phone
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field
//                     type="number"
//                     name="ClientPhone"
//                     placeholder="+1 (555) 123-4567"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.ClientPhone && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.ClientPhone}
//                     </div>
//                   )}
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Address
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <textarea
//                     name="ClientAddress"
//                     placeholder="123 Business St, City, State, ZIP"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   ></textarea>
//                   {formik.touched.ClientAddress && (
//                     <div style={{ color: "#f00", fontSize: "13px" }}>
//                       {formik.errors.ClientAddress}
//                     </div>
//                   )}
//                 </div>
//               </Form>
//             </Formik>
//           </div>

//           {/* ITEMS SECTION */}
//           <div className="itms_cont">
//             <h2>Item(s)</h2>

//             {items.map((item, index) => (
//               <div className="items" key={index}>
//                 <div className="item_header">
//                   <h3>Item {index + 1}</h3>
//                 </div>

//                 <Formik initialValues={item}>
//                   <Form className="special_form">
//                     <div className="form_des">
//                       <div className="inputs">
//                         <label>
//                           Description
//                           <Asterisk size={12} color="#f00" strokeWidth={2} />
//                         </label>
//                         <Field
//                           type="text"
//                           name="itemDescription"
//                           placeholder="Service or product description"
//                           value={item.description}
//                           onChange={(e) => {
//                             {
//                               formik.handleChange(e);
//                             }
//                             handleChange(index, "description", e.target.value);
//                           }}
//                           onBlur={formik.handleBlur}
//                         />
//                         {formik.touched.itemDescription && (
//                           <div style={{ color: "#f00", fontSize: "13px" }}>
//                             {formik.errors.itemDescription}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="item_form_contents">
//                       <div className="inputs">
//                         <label>
//                           Qty{" "}
//                           <Asterisk size={12} color="#f00" strokeWidth={2} />
//                         </label>
//                         <Field
//                           type="number"
//                           name="itemQty"
//                           placeholder="0"
//                           value={item.qty}
//                           onChange={(e) => {
//                             {
//                               formik.handleChange(e);
//                             }
//                             handleChange(index, "qty", e.target.value);
//                           }}
//                           onBlur={formik.handleBlur}
//                         />
//                         {formik.touched.itemQty && (
//                           <div style={{ color: "#f00", fontSize: "13px" }}>
//                             {formik.errors.itemQty}
//                           </div>
//                         )}
//                       </div>
//                       <div className="inputs">
//                         <label>
//                           Rate ($)
//                           <Asterisk size={12} color="#f00" strokeWidth={2} />
//                         </label>
//                         <Field
//                           type="number"
//                           name="itemRate"
//                           placeholder="0"
//                           value={item.rate}
//                           onChange={(e) => {
//                             {
//                               formik.handleChange(e);
//                             }
//                             handleChange(index, "rate", e.target.value);
//                           }}
//                           onBlur={formik.handleBlur}
//                         />
//                         {formik.touched.itemRate && (
//                           <div style={{ color: "#f00", fontSize: "13px" }}>
//                             {formik.errors.itemRate}
//                           </div>
//                         )}
//                       </div>
//                       <div className="inputs">
//                         <label>
//                           Amount
//                           <Asterisk size={12} color="#f00" strokeWidth={2} />
//                         </label>
//                         <Field
//                           type="text"
//                           name="itemAmount"
//                           placeholder="($)0.00"
//                           value={`$${item.amount.toFixed(2)}`}
//                           disabled
//                         />
//                       </div>
//                     </div>
//                     <button
//                       type="button"
//                       className="delete_btn"
//                       onClick={() => deleteItem(index)}
//                     >
//                       <Trash2 size={17} strokeWidth={2.5} color="#f00" />
//                       Delete
//                     </button>
//                   </Form>
//                 </Formik>
//               </div>
//             ))}
//           </div>

//           <button className="addItem_btn" type="button" onClick={addItem}>
//             + Add Item
//           </button>

//           <div className="tax_notes">
//             <Formik>
//               <Form>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Tax Rate(%)
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <Field type="number" name="TaxRate" placeholder={"($)0.00"} />
//                 </div>
//                 <div className="inputs">
//                   <label htmlFor="">
//                     Notes
//                     <Asterisk size={12} color="#f00" strokeWidth={2} />
//                   </label>
//                   <textarea
//                     name="Notes"
//                     placeholder="Additional notes or payment terms..."
//                   ></textarea>
//                 </div>
//                 <button
//                   className="download_btn"
//                   type="submit"
//                   onClick={formik.handleSubmit} // ✅ runs validation, then downloads if valid
//                 >
//                   <Download size={20} strokeWidth={3} color="#fff" />
//                   Download Invoice (PDF)
//                 </button>
//               </Form>
//             </Formik>
//           </div>
//         </div>
//       </section>
//       <section className="invoice_reciept" ref={invoiceRef}>
//         <div className="invoice_reciept_container">
//           <div className="head_container">
//             <div className="first_heading">
//               <h2>Invoice</h2>
//               <hr />
//             </div>
//             <div className="second_heading">
//               <span>
//                 <p>From:</p>
//                 <h2>{businessName}</h2>
//               </span>
//               <span>
//                 <p>To:</p>
//                 <h2>{clientName}</h2>
//               </span>
//             </div>
//           </div>
//           <div className="invoice_reciept_body">
//             <div className="invoice_info">
//               <span>
//                 <p>
//                   Invoice <Hash size={18} color="#f00" strokeWidth={2} />
//                 </p>
//                 <h2>{InvoiceNum}</h2>
//               </span>
//               <span>
//                 <p>Date</p>
//                 <h2>{InvoiceDate}</h2>
//               </span>
//               <span>
//                 <p>Due Date</p>
//                 <h2>{InvoiceDueDate}</h2>
//               </span>
//             </div>
//           </div>

//           <table>
//             <tr>
//               <th>Description</th>
//               <th>Quantity</th>
//               <th>Rate</th>
//               <th>Amount</th>
//             </tr>
//             {items.map((item, i) => (
//               <>
//                 <tr>
//                   <td>{item.description}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.rate}</td>
//                   <td>{item.amount}</td>
//                 </tr>
//               </>
//             ))}
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Body;

import "./Body.css";
import {
  Asterisk,
  CloudDrizzle,
  Download,
  Hash,
  House,
  Trash2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Body = () => {
  const invoiceRef = useRef();

  const [businessName, setBusinessName] = useState("");
  const [clientName, setClientName] = useState("");

  // Prompt for names once
  useEffect(() => {
    const biz = prompt("What's your business name?");
    const client = prompt("What's your client name?");
    setBusinessName(biz || "Your Business");
    setClientName(client || "Client Name");
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          invoiceNum: "",
          invoiceDate: "",
          dueDate: "",
          BusinessName: "",
          emailVal: "",
          PhoneVal: "",
          ClientName: "",
          ClientPhone: "",
          ClientAddress: "",
          ClientEmailVal: "",
          TaxRate: "",
          Notes: "",
          items: [{ description: "", qty: 0, rate: 0, amount: 0 }],
        }}
        validationSchema={yup.object({
          invoiceNum: yup.string().required("*This field is required"),
          invoiceDate: yup.string().required("*This field is required"),
          dueDate: yup.string().required("*This field is required"),
          BusinessName: yup.string().required("*This field is required"),
          emailVal: yup
            .string()
            .email("*Email must be valid")
            .required("*This field is required"),
          PhoneVal: yup.string().required("*This field is required"),
          ClientName: yup.string().required("*This field is required"),
          ClientEmailVal: yup
            .string()
            .email("*Email must be valid")
            .required("*This field is required"),
          ClientPhone: yup.string().required("*This field is required"),
          ClientAddress: yup.string().required("*This field is required"),
          TaxRate: yup.string().required("*This field is required"),
          items: yup
            .array()
            .of(
              yup.object().shape({
                description: yup.string().required("*This field is required"),
                qty: yup.number().required("*This field is required"),
                rate: yup.number().required("*This field is required"),
              })
            )
            .min(1, "At least one item is required"),
        })}
        onSubmit={async (values) => {
          const element = invoiceRef.current;
          const canvas = await html2canvas(element);
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const pageWidth = pdf.internal.pageSize.getWidth();
          const imgHeight = (canvas.height * pageWidth) / canvas.width;
          pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
          pdf.save("invoice.pdf");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
        }) => (
          <Form>
            <section className="sec1">
              <div className="sec1_container">
                <div className="sec1_head">
                  <Hash size={20} strokeWidth={3} color="blue" />
                  <h2>Invoice Details</h2>
                </div>

                <div className="sec1_content">
                  {/* Invoice Number */}
                  <div className="inputs">
                    <label>
                      Invoice Number <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      type="text"
                      name="invoiceNum"
                      placeholder="INV-001"
                    />
                    {touched.invoiceNum && errors.invoiceNum && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.invoiceNum}
                      </div>
                    )}
                  </div>

                  {/* Invoice Date */}
                  <div className="inputs">
                    <label>
                      Invoice Date <Asterisk size={12} color="#f00" />
                    </label>
                    <Field type="date" name="invoiceDate" />
                    {touched.invoiceDate && errors.invoiceDate && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.invoiceDate}
                      </div>
                    )}
                  </div>

                  {/* Due Date */}
                  <div className="inputs">
                    <label>
                      Due Date <Asterisk size={12} color="#f00" />
                    </label>
                    <Field type="date" name="dueDate" />
                    {touched.dueDate && errors.dueDate && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.dueDate}
                      </div>
                    )}
                  </div>

                  <h2 className="business_h2">
                    <House size={21} color="blue" strokeWidth={2} /> From{" "}
                    {businessName + " Business"}
                  </h2>

                  {/* Business Info */}
                  <div className="inputs">
                    <label>
                      Business Name <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      type="text"
                      name="BusinessName"
                      placeholder="Your Business Name"
                    />
                    {touched.BusinessName && errors.BusinessName && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.BusinessName}
                      </div>
                    )}
                  </div>

                  <div className="inputs">
                    <label>
                      Email <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      type="email"
                      name="emailVal"
                      placeholder="business@example.com"
                    />
                    {touched.emailVal && errors.emailVal && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.emailVal}
                      </div>
                    )}
                  </div>

                  <div className="inputs">
                    <label>
                      Phone <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      type="text"
                      name="PhoneVal"
                      placeholder="+1 (555) 123-4567"
                    />
                    {touched.PhoneVal && errors.PhoneVal && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.PhoneVal}
                      </div>
                    )}
                  </div>

                  <div className="inputs">
                    <label>
                      Address <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      as="textarea"
                      name="Address"
                      placeholder="123 Business St, City, ZIP"
                    />
                  </div>

                  <h2 className="business_h2">
                    <CloudDrizzle size={21} color="blue" strokeWidth={3} /> To{" "}
                    {clientName}
                  </h2>

                  {/* Client Info */}
                  <div className="inputs">
                    <label>
                      Client Name <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      type="text"
                      name="ClientName"
                      placeholder="Client Name"
                    />
                    {touched.ClientName && errors.ClientName && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.ClientName}
                      </div>
                    )}
                  </div>

                  <div className="inputs">
                    <label>
                      Client Email <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      type="email"
                      name="ClientEmailVal"
                      placeholder="client@example.com"
                    />
                    {touched.ClientEmailVal && errors.ClientEmailVal && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.ClientEmailVal}
                      </div>
                    )}
                  </div>

                  <div className="inputs">
                    <label>
                      Client Phone <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      type="text"
                      name="ClientPhone"
                      placeholder="+1 (555) 999-0000"
                    />
                    {touched.ClientPhone && errors.ClientPhone && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.ClientPhone}
                      </div>
                    )}
                  </div>

                  <div className="inputs">
                    <label>
                      Client Address <Asterisk size={12} color="#f00" />
                    </label>
                    <Field
                      as="textarea"
                      name="ClientAddress"
                      placeholder="Client Address"
                    />
                    {touched.ClientAddress && errors.ClientAddress && (
                      <div style={{ color: "#f00", fontSize: "13px" }}>
                        {errors.ClientAddress}
                      </div>
                    )}
                  </div>

                  {/* Items Section */}
                  <div className="itms_cont">
                    <h2>Item(s)</h2>

                    {values.items.map((item, index) => (
                      <div className="items" key={index}>
                        <div className="item_header">
                          <h3>Item {index + 1}</h3>
                        </div>

                        <div className="inputs">
                          <label>
                            Description <Asterisk size={12} color="#f00" />
                          </label>
                          <Field
                            type="text"
                            name={`items[${index}].description`}
                            placeholder="Service description"
                          />
                          {touched.items?.[index]?.description &&
                            errors.items?.[index]?.description && (
                              <div style={{ color: "#f00", fontSize: "13px" }}>
                                {errors.items[index].description}
                              </div>
                            )}
                        </div>

                        <div className="inputs">
                          <label>
                            Qty <Asterisk size={12} color="#f00" />
                          </label>
                          <Field
                            type="number"
                            name={`items[${index}].qty`}
                            placeholder="0"
                            onChange={(e) => {
                              handleChange(e);
                              const newQty = Number(e.target.value);
                              const rate = values.items[index].rate;
                              setFieldValue(
                                `items[${index}].amount`,
                                newQty * rate
                              );
                            }}
                          />
                          {touched.items?.[index]?.qty &&
                            errors.items?.[index]?.qty && (
                              <div style={{ color: "#f00", fontSize: "13px" }}>
                                {errors.items[index].qty}
                              </div>
                            )}
                        </div>

                        <div className="inputs">
                          <label>
                            Rate ($) <Asterisk size={12} color="#f00" />
                          </label>
                          <Field
                            type="number"
                            name={`items[${index}].rate`}
                            placeholder="0"
                            onChange={(e) => {
                              handleChange(e);
                              const newRate = Number(e.target.value);
                              const qty = values.items[index].qty;
                              setFieldValue(
                                `items[${index}].amount`,
                                qty * newRate
                              );
                            }}
                          />
                          {touched.items?.[index]?.rate &&
                            errors.items?.[index]?.rate && (
                              <div style={{ color: "#f00", fontSize: "13px" }}>
                                {errors.items[index].rate}
                              </div>
                            )}
                        </div>

                        <div className="inputs">
                          <label>Amount</label>
                          <Field
                            type="text"
                            name={`items[${index}].amount`}
                            value={`$${item.amount.toFixed(2)}`}
                            disabled
                          />
                        </div>

                        <button
                          type="button"
                          className="delete_btn"
                          onClick={() =>
                            setFieldValue(
                              "items",
                              values.items.filter((_, i) => i !== index)
                            )
                          }
                        >
                          <Trash2 size={17} strokeWidth={2.5} color="#f00" />{" "}
                          Delete
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="addItem_btn"
                      onClick={() =>
                        setFieldValue("items", [
                          ...values.items,
                          { description: "", qty: 0, rate: 0, amount: 0 },
                        ])
                      }
                    >
                      + Add Item
                    </button>
                  </div>

                  <div className="tax_notes">
                    <div className="inputs">
                      <label>
                        Tax Rate (%) <Asterisk size={12} color="#f00" />
                      </label>
                      <Field type="number" name="TaxRate" placeholder="0" />
                      {touched.TaxRate && errors.TaxRate && (
                        <div style={{ color: "#f00", fontSize: "13px" }}>
                          {errors.TaxRate}
                        </div>
                      )}
                    </div>

                    <div className="inputs">
                      <label>Notes</label>
                      <Field
                        as="textarea"
                        name="Notes"
                        placeholder="Additional notes..."
                      />
                    </div>

                    <button
                      className="download_btn"
                      type="submit"
                      onClick={handleSubmit}
                      style={{marginTop: "10px"}}
                    >
                      <Download size={20} strokeWidth={3} color="#fff" />
                      Download Invoice (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* INVOICE PREVIEW */}
            <section className="invoice_reciept" ref={invoiceRef}>
              <div className="invoice_reciept_container">
                <div className="head_container">
                  <div className="first_heading">
                    <h2>Invoice</h2>
                    <hr />
                  </div>
                  <div className="second_heading">
                    <span>
                      <p>From:</p>
                      <h2>{businessName}</h2>
                    </span>
                    <span>
                      <p>To:</p>
                      <h2>{clientName}</h2>
                    </span>
                  </div>
                </div>

                <table>
                  <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                  {values.items.map((item, i) => (
                    <tr key={i}>
                      <td>{item.description}</td>
                      <td>{item.qty}</td>
                      <td>{item.rate}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Body;
