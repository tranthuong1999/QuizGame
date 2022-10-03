const express = require("express");
const Question = require("./models/Question");
const router = express.Router();

router.get("/questions", async (req, res) => {
  const posts = await Question.find();
  res.send(posts);
});

router.post("/questions", async (req, res) => {
  const { question, option, answer } = req.body;

  console.log("Option---------", option);
  const questions = new Question({
    question,
    option,
    answer,
  });
  await questions.save();
  res.send(questions);
});

// router.get("/posts/:id", async (req, res) => {
//   try {
//     const post = await Question.findOne({ _id: req.params.id });
//     res.send(post);
//   } catch {
//     res.status(404);
//     res.send({ error: "Question doesn't exist!" });
//   }
// });

// router.patch("/posts/:id", async (req, res) => {
//   try {
//     const post = await Question.findOne({ _id: req.params.id });

//     if (req.body.title) {
//       post.title = req.body.title;
//     }

//     if (req.body.content) {
//       post.content = req.body.content;
//     }

//     await post.save();
//     res.send(post);
//   } catch {
//     res.status(404);
//     res.send({ error: "Question doesn't exist!" });
//   }
// });

// router.delete("/posts/:id", async (req, res) => {
//   try {
//     await Question.deleteOne({ _id: req.params.id });
//     res.status(204).send();
//   } catch {
//     res.status(404);
//     res.send({ error: "Question doesn't exist!" });
//   }
// });

module.exports = router;
