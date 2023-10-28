//ex 1
interface SettingsPay {
   price: number,
   discount: number,
   isInstallment: boolean,
   months: number
}
const totalPrice = (obj: SettingsPay): number => {
   const percent: number = 100
   const priceSale: number = (100 - obj?.discount) * obj?.price / percent
   const everyMonthPay: number = priceSale / obj.months
   return everyMonthPay
};

const pay: SettingsPay = { price: 100000, discount: 25, isInstallment: true, months: 12 }
if(pay.isInstallment) {
   console.log(totalPrice(pay));
}

//ex 2
type Post = 'id' | 'title' | 'body'
const posts: Record<Post, string>[] = [
   {
     id: '62e69d5a5458aac0ed320b35',
     title: 'id labore ex et quam laborum',
     body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
   },
   {
     id: '62e69d5a5458aac0ed320b1c',
     title: 'quo vero reiciendis velit similique earum',
     body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
   },
   {
     id: '62e69d5a5458aac0ed320b32',
     title: 'odio adipisci rerum aut animi',
     body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
   },
   {
     id: '62e69d5a5458aac0ed320b39',
     title: 'alias odio sit',
     body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
   },
   {
     id: '62e69d5a5458aac0ed320b53',
     title: 'vero eaque aliquid doloribus et culpa',
     body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
   },
   {
     id: '62e69d5a5458aac0ed320b19',
     title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
     body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
   },
   {
     id: '62e69d5a5458aac0ed320b25',
     title: 'repellat consequatur praesentium vel minus molestias voluptatum',
     body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
   }
 ];

 interface ById {
   [id: string]: Record<Post, string>
 }
 interface NormalizeData {
   byId: ById,
   allIds: string[]
 }
 const normalizeData = (unnormalizedData: Record<Post, string>[]): NormalizeData => {
   const byId = unnormalizedData.reduce((acc, obj) => {
     return {...acc, [obj.id]: obj}
   }, {} as ById)
   const allIds = unnormalizedData.reduce((acc, obj) => {
      return  [...acc, obj.id]
    }, [] as string[])

   return { byId, allIds }
   // Your code here...
 };

 console.log(normalizeData(posts));

 //ex 3
interface User {
   postId: number,
   id: number,
   name: string,
   email: string,
   body: string
}
interface ShortUser {
   id: number,
   email: string,
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<User[]> => {
   let response = await fetch(url);
   let users: User[] = await response.json();

  return users
}

function filterData(data:User[]): ShortUser[] {
   return data.reduce((acc, user) => {
      return  [...acc, { id: user.id, email: user.email }]
   }, [] as ShortUser[])
}
function showShortData(data:User[]): void {
   data.forEach((item) => {
      console.log(`ID:${item.id}, Email: ${item.email}`)
    });
}

getData(COMMENTS_URL)
  .then(data => {
   showShortData(data)
   //or
   // console.log(filterData(data))
});
