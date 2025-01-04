const express=require("express");
const app=express();
const cors=require('cors')
    const bodyParser=require("body-parser")
    app.use(bodyParser.json())
    app.use(cors());
    //creating an mock database
    const quizzes=[];
    let quizId=1;
    app.post('/api/quizzes', (req, res) => {
        try {
          console.log("Received Data:", req.body); 
      
          const { title, description, questions } = req.body;
      
          if (!title || !questions || questions.length === 0) {
            return res.status(400).json({ message: "Invalid data" });
          }
      
          const quiz = { id: quizId++, title, description, questions };
          quizzes.push(quiz);
      
          console.log("Quiz Saved:", quiz); // Log the saved quiz
          res.status(201).json({ message: 'Quiz created successfully', quiz });
        } catch (err) {
          console.error("Error Saving Quiz:", err); // Log the actual error
          res.status(500).json({ message: "Internal Server Error" });
        }
      });
      
    app.get('/api/quizzes/:id' ,(req,res)=>{
        const quiz=quizzes.find((q)=>q.id==req.params.id    );
        if(!quiz) return res.status(404).json({message:"quiz not found "})
            res.json(quiz)
    })
    app.listen(3000,()=>console.log("server is running on http://localhost:5000"))