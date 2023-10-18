/* Запрос */
/*
{
	"topicId": 5,
	"status": "published" // "draft", "deleted"
}
*/

/* Ответ */
/*
[
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
]
*/

// задача - типизировать функцию

/*
async function getFaqs(req) {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
*/

enum QuestionStatus { // сделаем через enum, так как имеем ограниченное число ответов
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}
async function getFaqs(req: {
  topicId: number;
  status: QuestionStatus;
}): Promise<
  {
    // здесь пишем, что функция возвращает - возвращает массив объектов - в конце пишем []
    question: string;
    answer: string;
    tags: string[]; // массив стрингов
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
