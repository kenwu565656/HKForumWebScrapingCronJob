from factory.scraperFactory import ScraperFactory


def scraperHandler(forum, channel):
    factory = ScraperFactory()
    factory.makeScraper(forum)
    factory.findPosts(channel)
    factory.getComments("")


