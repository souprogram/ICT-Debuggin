SELECT 
    p.name AS publisher_name, 
    COUNT(DISTINCT c.chatbotId) AS chatbot_count,
    COUNT(DISTINCT u.userId) as total_users,
    p.country_of_origin as publisher_country,
    CASE
        WHEN MAX(c.rating) IS NULL AND MIN(c.rating) IS NOT NULL THEN MAX(c.rating) - MIN(c.rating)
        ELSE 0
    END AS avg_rating_difference
FROM 
    publishers p
LEFT JOIN 
    chatbots c ON p.publisherId = p.publisherId
LEFT JOIN 
    chatbots_users cu ON c.chatbotId = cu.chatbotId
LEFT JOIN 
    users u ON cu.userId = u.userId
GROUP BY 
    p.name
ORDER BY 
    avg_rating_difference DESC;