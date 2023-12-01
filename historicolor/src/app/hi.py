import random
import requests

img_append = '/full/843,/0/default.jpg'


def randomInt(top):
    return random.randint(1, top)

def getRandomArtwork(seed, fields=["id", "title", "artist_id", "artist_title", "image_id"]):
    try:
        queryParams = {"fields": ",".join(fields)}
        response =  requests.post(
            "https://api.artic.edu/api/v1/artworks/search",
            json={"size": 1, "from": seed},
            params=queryParams
        )
        result = response.json()
        return (result['config']['iiif_url'] + '/' +  result['data'][0]['image_id'] + img_append)
    except Exception as error:
        print("Error:", error)

# def getactualimage(iiif, img_id, append):
#     try:
#         query = iiif + '/' + img_id + append
#         image = requests.post(
#             query
#         )
#         return image
#     except Exception as error:
#         print("Error:", error)

image= getRandomArtwork(randomInt(100))
print(image)

