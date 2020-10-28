items = input().split()
limit = len(items)

for i in items:
    if int(i) > 5 or int(i) < 1:
        print("inavl input")

items = [int(x) for x in items]
quan = input().split()
quan = [int(x) for x in quan]
if len(quan) != limit:
    print("inval input")

m= input()
rate=0
if m.lower() == "y":
    rate = rate + 5

def cal(price,rate):
    amount = (price/100)*rate
    print(amount)
    return price - amount

itemQ={}

p={1:50,2:100,3:40,4:200,5:300}
tPrice=0
for i in range(limit):
    itemQ[items[i]]=quan[i]
    tPrice=tPrice+(p[items[i]]*quan[i])
if tPrice > 1000:
    rate = rate + 10

print(rate,tPrice)
print(str(cal(tPrice,rate))+"INR")
