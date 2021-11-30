package com.toyproject.book.springboot.domain.posts;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

// JPA 테스트 코드
@RunWith(SpringRunner.class)
@SpringBootTest()  // H2 데이터베이스를 실행하여 테스트
public class PostsRepositoryTest {

    @Autowired
    PostsRepository postsRepository;

    @After
    public void cleanup() {
        postsRepository.deleteAll();  // 다음 테스트를 실행을 위해 데이터 삭제
    }

    @Test
    public void 게시글저장_불러오기() {
        String title = "공구리숙트 테스트 게시글";
        String description = "테스트 본문";
        String link = "https://www";
        String contact = "kakaotalk";
        String date = "2021-11-23 ~ 2021-12-25";
        String price = "10000";

        // 테이블에 insert/update 쿼리 실행 - save
        postsRepository.save(Posts.builder()
                .title(title)
                .description(description)
                .link(link)
                .contact(contact)
                .date(date)
                .price(price)
                .author("wn8925@sookmyung.ac.kr")
                .build());

        // posts 테이블의 모든 데이터 조회 및 출력 후 확인 - findAll
        List<Posts> postsList = postsRepository.findAll();

        Posts posts = postsList.get(0);
        assertThat(posts.getTitle()).isEqualTo(title);
        assertThat(posts.getDescription()).isEqualTo(description);
        assertThat(posts.getLink()).isEqualTo(link);
        assertThat(posts.getContact()).isEqualTo(contact);
        assertThat(posts.getDate()).isEqualTo(date);
        assertThat(posts.getPrice()).isEqualTo(price);
    }
}
