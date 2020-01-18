class LinkList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var head = new LinkList(1);
head.next = new LinkList(2);
head.next.next = new LinkList(3);
head.next.next.next = new LinkList(4);

function reverseLinkList(head) {
  if (head.next === null || head === null) {
    return null
  }
  var returned = reverseLinkList(head.next);
  // 1->2->3->4->null
  // 3->4->null
  // 4->3->4->null
  head.next.next = head;
  head = head.next;
  head.next.next = null;
  if (returned == null) {
    newStart = head;
    return newStart.next;
  }
  return head;
}

var savedHead = head;
// Head: {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":null}}}}
var newStart;
reverseLinkList(savedHead)
console.log(`newStart:`, JSON.stringify(newStart)) 
// newStart: {"data":4,"next":{"data":3,"next":{"data":2,"next":{"data":1,"next":null}}}}
