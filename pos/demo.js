let inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
    }
];

function getCount(inputs) {
    let allCount = inputs.map((item) =>  (item.price*item.count).toFixed(2));
    allCount = allCount.map(Number);
    let sum = allCount.reduce((pre,cur) => pre+cur);
    allCount.push(sum);
    return allCount;
}
let count=getCount(inputs);
console.log(count);
let str = '***<没钱赚商店>收据***'+'\n';
inputs.map((item,index) => {
     str +='名称：'+item.name
         +'，数量：'+item.count+item.unit
         +'，单价：'+item.price+'.00(元)，小计：'
         + count[index]+'.00(元)'+'\n';
});
str+='----------------------'+'\n';
str+='总计：'+count[count.length-1]+'.00(元)'+'\n'+'**********************';
console.log(str);
